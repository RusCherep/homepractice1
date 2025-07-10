import {
    addBooksToUser, addCompany,
    moveUser, removeBook,
    UpdateBook, updateCompanies, updateCompany,
    UpdateSkillLevel,
    upgradeUserLaptop,
    UserWithBooksType,
    UserWithLapTopType, WithCompanyType
} from "./10.01";

test('change address', () => {
    let user: UserWithLapTopType = {
        name: "Ruslan",
        hair: 14,
        address: {
            title: 'Minsk',
            house: 15
        },
        laptop: {
            title: 'HP'
        }
    }

    const movedUser = moveUser(user, 'Vitebsk')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Vitebsk')
})

test('upgrade LapTop', () => {
    let user: UserWithLapTopType = {
        name: "Ruslan",
        hair: 14,
        address: {
            title: 'Minsk',
            house: 15
        },
        laptop: {
            title: 'HP'
        }
    }

    const copyUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(copyUser)
    expect(user.laptop).not.toBe(copyUser.laptop)
    expect(user.address).toBe(copyUser.address)
    expect(copyUser.laptop.title).toBe('Macbook')
})

test('add books to user', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Ruslan",
        hair: 14,
        address: {
            title: 'Minsk',
            house: 15
        },
        laptop: {
            title: 'HP'
        },
        books: ["CSS", "HTML", "JS"]
    }

    const copyUser = addBooksToUser(user, ["React", "TS"])

    expect(user).not.toBe(copyUser)
    expect(user.books).not.toBe(copyUser.books)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(copyUser.books).toEqual(["CSS", "HTML", "JS", "React", "TS"])

})

test('update JS to TS', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Ruslan",
        hair: 14,
        address: {
            title: 'Minsk',
            house: 15
        },
        laptop: {
            title: 'HP'
        },
        books: ["CSS", "HTML", "JS"]
    }

    const copyUser = UpdateBook(user, "JS", "TS")

    expect(user).not.toBe(copyUser)
    expect(user.books).not.toBe(copyUser.books)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(copyUser.books.length).toBe(3)
    expect(copyUser.books).toEqual(["CSS", "HTML", "TS"])


})

test('update skill Level', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Ruslan",
        hair: 14,
        address: {
            title: 'Minsk',
            house: 15
        },
        laptop: {
            title: 'HP'
        },
        books: ["CSS", "HTML", "JS"],
        skillLevel: 25
    }

    const copyUser = UpdateSkillLevel(user, 50)

    expect(user).not.toBe(copyUser)
    expect(user.books).toBe(copyUser.books)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(copyUser.skillLevel).toBe(50)


})

test('remove JS from books', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Ruslan",
        hair: 14,
        address: {
            title: 'Minsk',
            house: 15
        },
        laptop: {
            title: 'HP'
        },
        books: ["CSS", "HTML", "JS"],
        skillLevel: 25
    }

    const copyUser = removeBook(user, "JS")

    expect(user).not.toBe(copyUser)
    expect(user.books).not.toBe(copyUser.books)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(copyUser.books.length).toBe(2)
    expect(copyUser.books).toEqual(["CSS", "HTML"])


})

test('add company', () => {
    let user: UserWithLapTopType & WithCompanyType = {
        name: "Ruslan",
        hair: 14,
        address: {
            title: 'Minsk',
            house: 15
        },
        laptop: {
            title: 'HP'
        },
        companies: [
            {
                id: 1,
                title: "Epam"
            },
            {
                id: 2,
                title: "Mapsoft"
            }
        ]
    }

    const copyUser = addCompany(user, 3, "GOOGLE")

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.companies).not.toBe(copyUser.companies)
    expect(copyUser.companies.length).toBe(3)


})

test('update company', () => {
    let user: UserWithLapTopType & WithCompanyType = {
        name: "Ruslan",
        hair: 14,
        address: {
            title: 'Minsk',
            house: 15
        },
        laptop: {
            title: 'HP'
        },
        companies: [
            {
                id: 1,
                title: "Epam"
            },
            {
                id: 2,
                title: "MapSoft"
            }
        ]
    }

    const copyUser = updateCompany(user, 1, "GOOGLE")

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.companies).not.toBe(copyUser.companies)
    expect(user.companies[0].title).toBe("Epam")
    expect(copyUser.companies[0].title).toBe("GOOGLE")
})

test('update companies', () => {
    let companies = {
        'Dimych': [
            {
                id: 1,
                title: "Epam"
            },
            {
                id: 2,
                title: "MapSoft"
            }
        ],
        'Ruslan': [
            {
                id: 1,
                title: "MapSoft"
            }
        ]
    }

    const copy= updateCompanies(companies,'Dimych', 1 , "EPAM")

    expect(copy["Dimych"]).not.toBe(companies["Dimych"])
    expect(copy["Ruslan"]).toBe(companies["Ruslan"])
    expect(copy["Dimych"][0].title).toBe("EPAM")

})


export {}
