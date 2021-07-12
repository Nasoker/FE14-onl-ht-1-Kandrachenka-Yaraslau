const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
const sectionElems = document.querySelectorAll('.tabs-row__text');


for (const tab of tabsHandlerElems) {
    tab.addEventListener('click', () => {
        tabsHandlerElems.forEach(btn => {
            tabsFieldElems.forEach(item => {

                if (item.dataset.tabsField === tab.dataset.tabsHandler) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            })

        })

    })


}