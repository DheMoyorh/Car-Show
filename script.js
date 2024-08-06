// Sample data
const cars = [
    { brand: 'Toyota', model: 'Corolla', year: 2020 },
    { brand: 'Honda', model: 'Civic', year: 2019 },
    { brand: 'Ford', model: 'Mustang', year: 2021 },
];

// Function to display cars
function displayCars(carList) {
    const carListElement = document.getElementById('cars');
    carListElement.innerHTML = '';
    carList.forEach(car => {
        const li = document.createElement('li');
        li.textContent = `${car.brand} ${car.model} (${car.year})`;
        carListElement.appendChild(li);
    });
}

// Function to add a new car
function addCar(event) {
    event.preventDefault();
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    cars.push({ brand, model, year });
    displayCars(cars);
    document.getElementById('car-form').reset();
}

// Function to filter cars by brand
function filterCars() {
    const filterBrand = document.getElementById('filter-brand').value.toLowerCase();
    const filteredCars = cars.filter(car => car.brand.toLowerCase().includes(filterBrand));
    displayCars(filteredCars);
}

// Function to animate the car image
function animateCar() {
    const car = document.getElementById('car');
    let position = 0;
    const containerWidth = document.getElementById('car-container').offsetWidth;
    const carWidth = car.offsetWidth;
    
    function moveCar() {
        position += 2; // Speed of animation
        if (position > containerWidth) {
            position = -carWidth; // Reset to start
        }
        car.style.left = position + 'px';
        requestAnimationFrame(moveCar); // Request next frame
    }
    
    moveCar();
}

// Event listeners
document.getElementById('car-form').addEventListener('submit', addCar);
document.getElementById('filter-brand').addEventListener('input', filterCars);

// Initial display
displayCars(cars);

// Start car animation
animateCar();
