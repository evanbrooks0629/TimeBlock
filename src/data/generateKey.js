const randomKey = () => {
    const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let key = "";

    while (key.length < 8) {
        let choice = Math.floor(Math.random() * 3);
        switch(choice) {
            case 0:
                key += lower[Math.floor(Math.random() * 26)];
                break;
            case 1:
                key += upper[Math.floor(Math.random() * 26)];
                break;
            case 2:
                key += nums[Math.floor(Math.random() * 10)];
                break;
            default:
                break;
        }
    }

    return key;
}

export default randomKey;