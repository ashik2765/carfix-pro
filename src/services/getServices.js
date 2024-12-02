export const getServices = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`)
        const data = res.json()
        return data;
    } catch (error) {
        return [];
    }
}
export const getServiceDetails = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`)
        const data = res.json()
        return data;
    } catch (error) {
        return {};
    }
}
