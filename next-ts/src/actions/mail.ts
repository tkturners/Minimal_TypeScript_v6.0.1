import type { IMail, IMailLabel } from 'src/types/mail';

import useSWR from 'swr';
import { useMemo } from 'react';

import { keyBy } from 'src/utils/helper';
import { fetcher, endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

const swrOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

// ----------------------------------------------------------------------

type LabelsData = {
  labels: IMailLabel[];
};

export function useGetLabels() {
  const url = endpoints.mail.labels;

  const { data, isLoading, error, isValidating } = useSWR<LabelsData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      labels: data?.labels || [],
      labelsLoading: isLoading,
      labelsError: error,
      labelsValidating: isValidating,
      labelsEmpty: !isLoading && !data?.labels.length,
    }),
    [data?.labels, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type MailsData = {
  mails: IMail[];
};

export function useGetMails(labelId: string) {
  const url = labelId ? [endpoints.mail.list, { params: { labelId } }] : '';

  const { data, isLoading, error, isValidating } = useSWR<MailsData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(() => {
    const byId = data?.mails.length ? keyBy(data?.mails, 'id') : {};
    const allIds = Object.keys(byId);

    return {
      mails: { byId, allIds },
      mailsLoading: isLoading,
      mailsError: error,
      mailsValidating: isValidating,
      mailsEmpty: !isLoading && !allIds.length,
    };
  }, [data?.mails, error, isLoading, isValidating]);

  return memoizedValue;
}

// ----------------------------------------------------------------------

type MailData = {
  mail: IMail;
};

export function useGetMail(mailId: string) {
  const url = mailId ? [endpoints.mail.details, { params: { mailId } }] : '';

  const { data, isLoading, error, isValidating } = useSWR<MailData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      mail: data?.mail,
      mailLoading: isLoading,
      mailError: error,
      mailValidating: isValidating,
    }),
    [data?.mail, error, isLoading, isValidating]
  );

  return memoizedValue;
}
