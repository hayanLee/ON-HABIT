export const fetchData = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url} 실패`);
    return await res.json();
};
