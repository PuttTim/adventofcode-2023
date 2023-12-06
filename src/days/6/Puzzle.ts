const first = (input: string) => {
    const inputs = input.replaceAll("\r", "").split("\n")

    console.log(inputs)

    const times = inputs[0].split(/(\d+)/).filter((num) => !isNaN(parseInt(num)))
    const dist = inputs[1].split(/(\d+)/).filter((num) => !isNaN(parseInt(num)))

    console.log(times, dist)

    const races = times.map((time, index) => {
        return { time: parseInt(time), dist: parseInt(dist[index]) }
    })

    console.log(races)

    let totalVariants = 0

    races.forEach((race) => {
        console.log(race.time, race.dist)

        let gameVariants = 0

        for (let msPressed = 0; msPressed < race.time; msPressed++) {
            if ((race.time - msPressed) * msPressed > race.dist) {
                gameVariants = gameVariants + 1
            }
        }

        totalVariants = totalVariants != 0 ? totalVariants * gameVariants : gameVariants
    })

    console.log(totalVariants)

    return "solution 1"
}

const expectedFirstSolution = "solution 1"

const second = (input: string) => {
    // just remove the spaces from the input.. and it works..?
    return "solution 2"
}

const expectedSecondSolution = "solution 2"

export { first, expectedFirstSolution, second, expectedSecondSolution }
