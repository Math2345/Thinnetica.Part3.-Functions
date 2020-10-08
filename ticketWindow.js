function TicketWindow() {

    this._listEvents = [
        {
            totalCash: 0,
            events: []
        }
    ];

    this.createEvent = (name, price) => {
        if (name && price && typeof name === "string" && typeof price === 'number') {

            this._listEvents[0].events.push({
                name: name,
                price: price,
                tickets: []
            })
        }
    }

    this.buyTicket = name => {
        const findEvent =  this._listEvents[0].events.find((event) => event.name === name);
        const id = Math.floor(Math.random() * 100000) + 1;

        findEvent.tickets.push(id);
        this._listEvents[0].totalCash = findEvent.price * findEvent.tickets.length;

        return id;
    }

    this.returnTicket = id => {
        const events = this._listEvents[0].events;
        const tickets = events[0].tickets;

        const ticketId = events[0].tickets.find( ticket => ticket === id);

        if (!ticketId) {
            new Error('Билет не найден')
        }
        else {
            const ind = tickets.indexOf(ticketId);
            tickets.splice(ind, 1);

            this._listEvents[0].totalCash -= events[0].price;
        }
    }
}

const ticketWindow = new TicketWindow();

ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
ticketWindow.buyTicket('Concert');
ticketWindow.returnTicket('1') /* Возвращаем билет, если в системе такой id записан
// как проданный, он должен быть удален из списка проданных и из кассы должна быть
// вычтена соответствующая его цене сумма */