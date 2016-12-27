function date(start, end) {
    start = start || new Date(2012, 0, 1);
    end = end || new Date();
    newDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return newDate;
}

module.exports = date;