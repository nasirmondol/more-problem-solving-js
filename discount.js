function ticketPrice(ticketQuantity) {
    const first100Ticket = 100;
    const second100Ticket = 90;
    const restTicket = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Ticket;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100 = 100 * first100Ticket;
        const restTicket = ticketQuantity - 100;
        const restticketPrice = restTicket * second100Ticket;
        const totalPrice = first100 + restticketPrice;
        return totalPrice;
    }
    else {
        const first100 = 100 * first100Ticket;
        const second100 = 100 * second100Ticket;
        const restTicketquantity = ticketQuantity - 200;
        const restticketPrice = restTicketquantity * restTicket;
        const total = first100 + second100 + restticketPrice;
        return total;
    }
}

const ticketPriceAmount = ticketPrice(220);
console.log(ticketPriceAmount);
