const SpecialTab = {
    THREE_YEARS: "4",
    BEGINNER: "8",
}
const SELECTED_TABS = [SpecialTab.THREE_YEARS, SpecialTab.BEGINNER]

const Country = {
    JAPAN: "25",
    IRELAND: "58",
    ENGLAND: "7",
    AMERICA: "2",
    CANADA: "11",
    AUSTRALIA: "20",
    SOUTH_AFRICA: "30",
}
const EXCEPT_COUNTRIES = [
    Country.JAPAN, Country.IRELAND, Country.ENGLAND,
    Country.AMERICA, Country.CANADA, Country.AUSTRALIA,
    Country.SOUTH_AFRICA,
]

window.onload = async () => {
    'use strict'
    let tabs = document.querySelectorAll("input[name='data[tab1][type][]']")
    tabs.forEach(el => {
        if (!SELECTED_TABS.includes(el.getAttribute("value"))) return
        el.parentElement.classList.add("active-checkbox")
        el.checked = true
    })

    let countries = document.querySelectorAll("input[name='country[]']")
    countries.forEach(el => {
        if (EXCEPT_COUNTRIES.includes(el.getAttribute("value"))) return
        el.parentElement.classList.add("active")
        el.style.visibility = "visible"
        el.checked = true
    })
    let choose_country = document.querySelector("#choose_country")
    choose_country.innerHTML = "国籍 : 選択済"
}