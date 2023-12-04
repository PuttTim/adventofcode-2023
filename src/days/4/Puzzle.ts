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
    return "solution 2"
}

const expectedSecondSolution = "solution 2"

export { first, expectedFirstSolution, second, expectedSecondSolution }
