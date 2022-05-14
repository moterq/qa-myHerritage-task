import { expect } from 'chai';
import { assert } from 'chai';

export class TestPage {

    public get buttonPlayground() {
        return $("/html//button[@id='ajaxButton']");
    }
    public get successFrame() {
        return $("//div[@id='content']/p[@class='bg-success']");
    }

    /* Техническое собеседование (доп. задание "на интерес") от 2022-04-13 с Matvei Semenuyk. 
            Тема:
        Воспроизвести кейс на наличие письма в трекере "Wix" 
        с логикой обновления страницы при возможных задержках доставки "тикета" */

    /* MAIN */

    open() {
        browser.setWindowSize(1440, 900);
        browser.url('http://uitestingplayground.com/clientdelay'); // Что-то минимально похоже, о чем говорили сегодня, нашёл на данной "песочнице".
    }                                                              // Работает, как "Ждать 15 секунд до появления элемента после клика на кнопку"

    /* FIRST TEST */

    clickButton() {
        this.buttonPlayground.click();
    }

    expectFrame() {
        const frameIsHere: boolean = this.successFrame.isDisplayed(); // Условное заполнение boolean с отсылкой к теме разговора, а-ля "Если бы письмо было сразу, то тест бы пошёл дальше"
        let frameIsHereExpect: boolean = false; // Переменная для проверок в цикле 

        if (frameIsHere == true) {
            expect(frameIsHere.toString, '"First expect" => expectFrame => "./page/test.page.ts"')
                .to.include('Data calculated on the client side.'); // Проврека, при наличии элемента сразу, на текст (true в условии)
        } else {
            let endWhile: number = 0;
            do {
                let checkElement: boolean = this.successFrame.isDisplayed();
                if (checkElement == true) {
                    frameIsHereExpect = true; // Изменение перменной, указанной ранее, при позитивном резултате
                    return endWhile = 3; // Выход из цикла
                } else {
                    browser.refresh(); //Если не отобразило (checkElement: false) 
                    this.buttonPlayground.click();
                    browser.pause(16000); // Примитивная выдержка в 16 секунд, ***ИЗМЕНИТЬ В МЕНЬШУЮ СТОРОНУ ДЛЯ ПОЛУЧЕНИЯ ОШИБКИ / ОТРАБОТКИ ЦИКЛА N++ РАЗ***                   
                }
                endWhile++;
            } while (endWhile < 3); // Counter


            expect(frameIsHereExpect, '"Second expect" => expectFrame => "./page/test.page.ts"')
                .to.be.true; // Финальная проверка на TRUE
            expect(frameIsHere.toString, '"Third expect" => expectFrame => "./page/test.page.ts"')
                .include("Data calculated on the client side."); // Финальная проверка на текст
        }

    }
}


