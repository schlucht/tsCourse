export const monthName = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
];

export const formatDate = (date: Date): string => {
    
    return date.toLocaleDateString();
};

export const formatCurrency = (date: number): string => {
    return (date < 0 ? date * -1 : date).toFixed(2) + ' sFr';
};
