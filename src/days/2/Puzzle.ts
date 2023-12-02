type TCubeType = {
    red: number
    green: number
    blue: number
}

const first = (input: string) => {
    // console.log("input2\n", input)

    const games = input.replaceAll("\r", "").replaceAll(";", ",").split("\n")

    console.log(games)

    let gameIdSum = 0

    const limits: TCubeType = {
        red: 12,
        green: 13,
        blue: 14,
    }

    games.forEach((game, index) => {
        game = game.split(":")[1]

        let valid = true

        console.log(">>>", game)

        game.split(",").forEach((pick) => {
            // console.log(pick.split(/(\d+)/))
            const cubes = pick.replaceAll("\n", "").split(/(\d+)/)

            // console.log(typeof cubes[1], typeof cubes[2])

            // console.log(limits[cubes[2].replaceAll(" ", "")] <= cubes[1])

            if (limits[cubes[2].replaceAll(" ", "")] < cubes[1]) {
                valid = false
            }

            // console.log(pick[1], pick[2])
        })
        console.log(">>>BEFORE", gameIdSum)

        console.log(">>>VALID", valid, gameIdSum, index + 1)

        if (valid) {
            gameIdSum = gameIdSum + index + 1
        }

        console.log(">>>AFTER", gameIdSum)

        // console.log(game, index + 1)
        console.log(gameIdSum)
    })

    console.log(gameIdSum)

    return "solution 1"
}

const expectedFirstSolution = "solution 1"

const second = (input: string) => {
    // console.log("input2\n", input)

    const games = input.replaceAll("\r", "").replaceAll(";", ",").split("\n")

    console.log(games)

    let gameSum = 0

    games.forEach((game, index) => {
        game = game.split(":")[1]

        const max: TCubeType = {
            red: 0,
            green: 0,
            blue: 0,
        }

        console.log(">>>", game)

        game.split(",").forEach((pick) => {
            // console.log(pick.split(/(\d+)/))
            const cubes = pick.replaceAll("\n", "").split(/(\d+)/)

            // console.log(typeof cubes[1], typeof cubes[2])

            // console.log(limits[cubes[2].replaceAll(" ", "")] <= cubes[1])

            // console.log(pick[1], pick[2])

            max[cubes[2].replaceAll(" ", "")] = Math.max(
                max[cubes[2].replaceAll(" ", "")],
                parseInt(cubes[1]),
            )
        })

        console.log(">>>MAX", max, max.red * max.green * max.blue)

        // console.log(">>>BEFORE", gameIdSum)

        // console.log(">>>VALID", valid, gameIdSum, index + 1)

        // if (valid) {
        // gameIdSum = gameIdSum + index + 1
        // }

        // console.log(">>>AFTER", gameIdSum)

        // console.log(game, index + 1)
        // console.log(gameIdSum)
        const maxValue = max.red * max.green * max.blue
        gameSum = gameSum + maxValue
    })

    console.log(">>>GAMESUM", gameSum)

    return "solution 2"
}

const expectedSecondSolution = "solution 2"

export { first, expectedFirstSolution, second, expectedSecondSolution }
