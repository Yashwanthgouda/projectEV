function app() {
    return {
        loginModalOpen: false,
        registerModalOpen: false,
        stations: [
            { id: 1, name: 'Downtown Charging Hub', address: '123 Main St', available_slots: 5 },
            { id: 2, name: 'Riverside Electric Station', address: '456 River Rd', available_slots: 3 },
            { id: 3, name: 'Tech Park Charging Point', address: '789 Innovation Ave', available_slots: 7 }
        ],
        booking: {
            station: null,
            vehicle_type: 'sedan',
            start_time: '',
            end_time: '',
            battery_percentage: 50
        },
        login: {
            email: '',
            password: ''
        },
        register: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        openLoginModal() {
            this.loginModalOpen = true;
            this.registerModalOpen = false;
        },
        closeLoginModal() {
            this.loginModalOpen = false;
        },
        openRegisterModal() {
            this.registerModalOpen = true;
            this.loginModalOpen = false;
        },
        closeRegisterModal() {
            this.registerModalOpen = false;
        },
        selectStation(station) {
            this.booking.station = station.id;
            window.location.href = '#booking';
        },
        scrollToBooking() {
            window.location.href = '#booking';
        },
        bookCharging() {
            alert('Booking submitted! Confirmation details will be sent to your email.');
        },
        handleLogin() {
            alert('Login functionality to be implemented.');
        },
        handleRegister() {
            if (this.register.password !== this.register.confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            alert(`Registered successfully! Welcome, ${this.register.name}.`);
            this.closeRegisterModal();
            this.openLoginModal();
        }
    };
}