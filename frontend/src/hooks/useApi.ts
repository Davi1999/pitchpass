import { useCallback, useEffect, useState } from 'react';

interface ApiState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export function useApi<T>(loader: () => Promise<T>, deps: unknown[]) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    error: null,
    loading: true
  });
  const [reloadToken, setReloadToken] = useState(0);

  const reload = useCallback(() => setReloadToken((token) => token + 1), []);

  useEffect(() => {
    let active = true;
    setState((current) => ({ ...current, loading: true, error: null }));

    loader()
      .then((data) => {
        if (active) setState({ data, error: null, loading: false });
      })
      .catch((error: unknown) => {
        if (active) {
          setState({
            data: null,
            error: error instanceof Error ? error.message : 'Could not load data.',
            loading: false
          });
        }
      });

    return () => {
      active = false;
    };
    // The caller owns the dependency list on purpose.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, reloadToken]);

  return { ...state, reload };
}
