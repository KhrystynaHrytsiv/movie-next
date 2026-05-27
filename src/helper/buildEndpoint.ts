export const buildParams = (
    paramsObj: Record<string, string | number | undefined>,
    keysMap?: Record<string, string>) => {
    const params = new URLSearchParams();

    Object.entries(paramsObj).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
            params.set(keysMap?.[key] || key, String(value));
        }
    });

    return params;
};