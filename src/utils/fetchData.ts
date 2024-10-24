export const fetchData = async (url: string, options?: RequestInit) => {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`${url} 실패`);
    return await res.json();
};
