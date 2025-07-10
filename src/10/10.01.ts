export type UserType = {
    name: string
    hair: number
    address: {
        title: string
        house: number
    }
    skillLevel?: number
}

export type LapTop = {
    title: string
}

export type UserWithLapTopType = UserType & {
    laptop: LapTop
}

type Companies = { id: number, title: string }[];
export type WithCompanyType = {
    companies: Companies
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    return copy
}

export function moveUser(u: UserWithLapTopType, cityTitle: string) {
    return {
        ...u,
        address: {
            ...u.address,
            title: cityTitle
        }
    }
}

export function upgradeUserLaptop(u: UserWithLapTopType, newLapTop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: newLapTop
        }
    }
}

export function addBooksToUser(u: UserWithLapTopType & UserWithBooksType, newBooks: Array<string>) {
    return {
        ...u,
        books: [
            ...u.books,
            ...newBooks
        ]
    }
}

export function UpdateBook(u: UserWithLapTopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export function UpdateSkillLevel(u: UserWithLapTopType & UserWithBooksType, skillNumber: number) {
    return {
        ...u,
        skillLevel: skillNumber
    }
}

export const removeBook = (u: UserWithLapTopType & UserWithBooksType, removeBook: string) => {
    return {
        ...u,
        books: [...u.books.filter(b => b !== removeBook)]
    }
}

export function addCompany(u: UserWithLapTopType & WithCompanyType, id: number, title: string) {
    return {
        ...u,
        companies: [...u.companies, {id: id, title: title}]
    }
}

export const updateCompany = (u: UserWithLapTopType & WithCompanyType, id: number, newTitle: string) => {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {
            ...c,
            title: newTitle
        } : c)
    }
}

export const updateCompanies = (c: {
    [name: string]: Companies
}, userName: string, userId: number, newTitle: string) => {
    let copy = {
        ...c
    }

    copy[userName] = copy[userName].map(c => c.id === userId ? {...c, title: newTitle} : c)

    return copy
}

