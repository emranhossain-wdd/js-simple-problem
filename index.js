const member = [
    {
        name: "Mr Rashed",
        birthYear: 1999,
        currentYear: 2022,
        district: "Dhaka",
        postNo: 1200,
        priority: 2
    },
    {
        name: "Mr Ranju",
        birthYear: 1995,
        currentYear: 2022,
        district: "Rajshahi",
        postNo: 1211,
        priority: 1
    }
]



const cardDistribution = (arr) => {
    let cardNumber;
    let finalObject;
    arr.map(obj => {
        const district = obj?.district.slice(0, 2).toUpperCase();
        const currentYear = obj?.currentYear.toString().slice(2, 4);
        const postalNo = obj?.postNo.toString().slice(0, 2);
        const birthDate = obj?.birthYear.toString();
        cardNumber = district + currentYear.concat(postalNo) + birthDate + "0".padStart(4, "0") + parseInt(arr.indexOf(obj) + parseInt(1));

        const lastDigit = parseInt(cardNumber.slice(14, 15));
        let gift;
        if (lastDigit % 2) {
            gift = 'R'
        }
        else {
            gift = "W"
        }
        finalObject = { cardNumber: cardNumber, gift: gift, priority: obj.priority }

        console.log([finalObject]);
    })
}
cardDistribution(member)