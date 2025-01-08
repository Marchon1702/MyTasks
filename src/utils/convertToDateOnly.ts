// Conversor para somente data, o DateOnly do CSharp

export const convertToDateOnly = (data: Date): string => {
    return data.toISOString().split("T")[0]
}