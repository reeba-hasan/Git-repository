for (let year = 2024; year <= 2050; year++) {
    const d = new Date (year, 0, 1);
    if (d.getDate === 0) {
        console.log(`1st jan is being a sunday ${year}`);
    }
}
