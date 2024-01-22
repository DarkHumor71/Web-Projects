function telephoneCheck(str) {
    const r = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-|\s]?)\d{4}$/;

    return r.test(str);
}

telephoneCheck("555-555-5555");