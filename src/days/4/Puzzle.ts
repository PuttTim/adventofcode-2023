const first = (input: string) => {
    const cards = input.replaceAll("\r", "").split("\n")

    console.log(cards)

    let totalPoints = 0

    cards.forEach((card) => {
        const cardSplit = card.split(":")[1].split("|")
        let gamePoints = 0
        // console.log(cardSplit)

        // console.log(cardSplit[0])
        // console.log(cardSplit[1])

        const winningNumbers = cardSplit[0].split(/(\d+)/).filter((num) => !isNaN(parseInt(num)))
        const ownedNumbers = cardSplit[1].split(/(\d+)/).filter((num) => !isNaN(parseInt(num)))

        console.log(winningNumbers)
        console.log(ownedNumbers)

        for (const num of ownedNumbers) {
            console.log(winningNumbers.includes(num), num, winningNumbers)

            // if (winningNumbers.includes(num)) {
            // log
            // }
            // winningNumbers.includes(num) ? (totalPoints = totalPoints + 1) : undefined
            if (winningNumbers.includes(num)) {
                gamePoints === 0 ? (gamePoints = 1) : (gamePoints = gamePoints * 2)
            }
        }

        totalPoints = totalPoints + gamePoints

        // for (const num in ownedNumbers) {
        //     if (num in winningNumbers) {
        //         console.log(num, winningNumbers)

        //         totalPoints = totalPoints + 1
        //     }
        // }
    })

    console.log(totalPoints)

    return "solution 1"
}

const expectedFirstSolution = "solution 1"

const second = (input: string) => {
    const cards = input.replaceAll("\r", "").split("\n")

    console.log(cards)

    let totalPoints = 0

    let array1 = Array(cards.length).fill({
        total: 1,
    })

    console.log(array1)

    cards.forEach((card, index) => {
        const cardSplit = card.split(":")[1].split("|")
        let gamePoints = 0
        // console.log(cardSplit)

        // console.log(cardSplit[0])
        // console.log(cardSplit[1])

        const winningNumbers = cardSplit[0].split(/(\d+)/).filter((num) => !isNaN(parseInt(num)))
        const ownedNumbers = cardSplit[1].split(/(\d+)/).filter((num) => !isNaN(parseInt(num)))

        // console.log(winningNumbers)
        // console.log(ownedNumbers)

        for (const num of ownedNumbers) {
            // console.log(winningNumbers.includes(num), num, winningNumbers)

            // if (winningNumbers.includes(num)) {
            // log
            // }
            // winningNumbers.includes(num) ? (totalPoints = totalPoints + 1) : undefined
            if (winningNumbers.includes(num)) {
                gamePoints = gamePoints + 1
            }
        }

        if (gamePoints > 0) {
        }

        console.log(">>>>>", gamePoints, index)

        for (let i = 1; i <= gamePoints; i++) {
            // console.log(i)
            console.log()

            array1[index + i] = {
                total: array1[index + i].total + 1 * array1[index].total,
            }
        }

        // for (let i = index; i < array1.length; i++) {
        //     // console.log("hello?")

        //     console.log(">>", array1[i])
        //     array1[i] = {
        //         total: array1[i].total + gamePoints,
        //     }
        // }
        console.log(">>>", gamePoints, array1)

        // totalPoints = totalPoints + gamePoints

        // for (const num in ownedNumbers) {
        //     if (num in winningNumbers) {
        //         console.log(num, winningNumbers)

        //         totalPoints = totalPoints + 1
        //     }
        // }
    })

    console.log(array1)

    console.log(array1.reduce((n, { total }) => n + total, 0))
    return "solution 2"
}

const expectedSecondSolution = "solution 2"

export { first, expectedFirstSolution, second, expectedSecondSolution }
