import type { IInvoice } from 'src/types/invoice';

import { useMemo } from 'react';
import { Page, View, Text, Font, Image, Document, StyleSheet } from '@react-pdf/renderer';

import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

Font.register({
  family: 'Roboto',
  fonts: [{ src: '/fonts/Roboto-Regular.ttf' }, { src: '/fonts/Roboto-Bold.ttf' }],
});

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        // layout
        page: {
          fontSize: 9,
          lineHeight: 1.6,
          fontFamily: 'Roboto',
          backgroundColor: '#FFFFFF',
          padding: '40px 24px 120px 24px',
        },
        footer: {
          left: 0,
          right: 0,
          bottom: 0,
          padding: 24,
          margin: 'auto',
          borderTopWidth: 1,
          borderStyle: 'solid',
          position: 'absolute',
          borderColor: '#e9ecef',
        },
        container: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        // margin
        mb4: { marginBottom: 4 },
        mb8: { marginBottom: 8 },
        mb40: { marginBottom: 40 },
        // text
        h3: { fontSize: 16, fontWeight: 700 },
        h4: { fontSize: 13, fontWeight: 700 },
        body1: { fontSize: 10 },
        subtitle1: { fontSize: 10, fontWeight: 700 },
        body2: { fontSize: 9 },
        subtitle2: { fontSize: 9, fontWeight: 700 },
        // table
        table: { display: 'flex', width: '100%' },
        row: {
          padding: '10px 0 8px 0',
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderStyle: 'solid',
          borderColor: '#e9ecef',
        },
        cell_1: { width: '5%' },
        cell_2: { width: '50%' },
        cell_3: { width: '15%', paddingLeft: 32 },
        cell_4: { width: '15%', paddingLeft: 8 },
        cell_5: { width: '15%' },
        noBorder: { paddingTop: '10px', paddingBottom: 0, borderBottomWidth: 0 },
      }),
    []
  );

// ----------------------------------------------------------------------

type Props = {
  invoice: IInvoice;
  currentStatus: string;
};

export function InvoicePDF({ invoice, currentStatus }: Props) {
  const {
    items,
    taxes,
    dueDate,
    discount,
    shipping,
    subtotal,
    invoiceTo,
    createDate,
    totalAmount,
    invoiceFrom,
    invoiceNumber,
  } = invoice;

  const styles = useStyles();

  const renderHeader = (
    <View style={[styles.container, styles.mb40]}>
      <Image source="/logo/logo-single.png" style={{ width: 48, height: 48 }} />

      <View style={{ alignItems: 'flex-end', flexDirection: 'column' }}>
        <Text style={[styles.h3, { textTransform: 'capitalize' }]}>{currentStatus}</Text>
        <Text> {invoiceNumber} </Text>
      </View>
    </View>
  );

  const renderFooter = (
    <View style={[styles.container, styles.footer]} fixed>
      <View style={{ width: '75%' }}>
        <Text style={styles.subtitle2}>NOTES</Text>
        <Text>
          We appreciate your business. Should you need us to add VAT or extra notes let us know!
        </Text>
      </View>
      <View style={{ width: '25%', textAlign: 'right' }}>
        <Text style={styles.subtitle2}>Have a question?</Text>
        <Text>support@abcapp.com</Text>
      </View>
    </View>
  );

  const renderInfo = (
    <View style={[styles.container, styles.mb40]}>
      <View style={{ width: '50%' }}>
        <Text style={[styles.subtitle2, styles.mb4]}>Invoice from</Text>
        <Text style={styles.body2}>{invoiceFrom.name}</Text>
        <Text style={styles.body2}>{invoiceFrom.fullAddress}</Text>
        <Text style={styles.body2}>{invoiceFrom.phoneNumber}</Text>
      </View>

      <View style={{ width: '50%' }}>
        <Text style={[styles.subtitle2, styles.mb4]}>Invoice to</Text>
        <Text style={styles.body2}>{invoiceTo.name}</Text>
        <Text style={styles.body2}>{invoiceTo.fullAddress}</Text>
        <Text style={styles.body2}>{invoiceTo.phoneNumber}</Text>
      </View>
    </View>
  );

  const renderTime = (
    <View style={[styles.container, styles.mb40]}>
      <View style={{ width: '50%' }}>
        <Text style={[styles.subtitle2, styles.mb4]}>Date create</Text>
        <Text style={styles.body2}>{fDate(createDate)}</Text>
      </View>
      <View style={{ width: '50%' }}>
        <Text style={[styles.subtitle2, styles.mb4]}>Due date</Text>
        <Text style={styles.body2}>{fDate(dueDate)}</Text>
      </View>
    </View>
  );

  const renderTable = (
    <>
      <Text style={[styles.subtitle1, styles.mb8]}>Invoice details</Text>

      <View style={styles.table}>
        <View>
          <View style={styles.row}>
            <View style={styles.cell_1}>
              <Text style={styles.subtitle2}>#</Text>
            </View>
            <View style={styles.cell_2}>
              <Text style={styles.subtitle2}>Description</Text>
            </View>
            <View style={styles.cell_3}>
              <Text style={styles.subtitle2}>Qty</Text>
            </View>
            <View style={styles.cell_4}>
              <Text style={styles.subtitle2}>Unit price</Text>
            </View>
            <View style={[styles.cell_5, { textAlign: 'right' }]}>
              <Text style={styles.subtitle2}>Total</Text>
            </View>
          </View>
        </View>

        <View>
          {items.map((item, index) => (
            <View key={item.id} style={styles.row}>
              <View style={styles.cell_1}>
                <Text>{index + 1}</Text>
              </View>
              <View style={styles.cell_2}>
                <Text style={styles.subtitle2}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
              <View style={styles.cell_3}>
                <Text>{item.quantity}</Text>
              </View>
              <View style={styles.cell_4}>
                <Text>{item.price}</Text>
              </View>
              <View style={[styles.cell_5, { textAlign: 'right' }]}>
                <Text>{fCurrency(item.price * item.quantity)}</Text>
              </View>
            </View>
          ))}

          {[
            { name: 'Subtotal', value: subtotal },
            { name: 'Shipping', value: -shipping },
            { name: 'Discount', value: -discount },
            { name: 'Taxes', value: taxes },
            { name: 'Total', value: totalAmount, styles: styles.h4 },
          ].map((item) => (
            <View key={item.name} style={[styles.row, styles.noBorder]}>
              <View style={styles.cell_1} />
              <View style={styles.cell_2} />
              <View style={styles.cell_3} />
              <View style={styles.cell_4}>
                <Text style={item.styles}>{item.name}</Text>
              </View>
              <View style={[styles.cell_5, { textAlign: 'right' }]}>
                <Text style={item.styles}>{fCurrency(item.value)}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {renderHeader}

        {renderInfo}

        {renderTime}

        {renderTable}

        {renderFooter}
      </Page>
    </Document>
  );
}
