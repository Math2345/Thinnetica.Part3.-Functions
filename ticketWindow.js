function TicketWindow() {

    this._listEvents = [    // храним все мероприятия, например концерт(можно добавить кино), цена за мероприятие
        {                   // и список билетов на мероприятие
            totalCash: 0,
            events: []
        }
    ];

    // создаем мероприятие и указываем цену билетов

    this.createEvent = (name, price) => {
        if (name && price && typeof name === "string" && typeof price === 'number') {

            this._listEvents[0].events.push({
                name: name,
                price: price,
                tickets: []
            })
        }
    }

    //Добавляем сумму за билет в кассу, возвращаем
    // случайный шестизначный ID билета

    this.buyTicket = name => {
        const findEvent =  this._listEvents[0].events.find((event) => event.name === name);
        const id = Math.floor(Math.random() * 100000) + 1;

        findEvent.tickets.push(id);
        this._listEvents[0].totalCash = findEvent.price * findEvent.tickets.length;

        return id;
    }

    // Возвращаем билет, если в системе такой id записан
    // как проданный, он должен быть удален из списка проданных и из кассы должна быть
    // вычтена соответствующая его цене сумма

    this.returnTicket = id => {
        const events = this._listEvents[0].events;
        const tickets = events[0].tickets;

        const ticketId = events[0].tickets.find( ticket => ticket === id);

        if (!ticketId) {
            throw new Error('Билет не найден')
        }
        else {
            const ind = tickets.indexOf(ticketId);
            tickets.splice(ind, 1);

            this._listEvents[0].totalCash -= events[0].price;
        }
    }
}

const ticketWindow = new TicketWindow();

ticketWindow.createEvent('Concert', 500);
console.log(ticketWindow.buyTicket('Concert'));
console.log(ticketWindow.returnTicket('1'));