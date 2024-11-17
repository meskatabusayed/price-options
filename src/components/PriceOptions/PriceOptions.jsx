import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const options = [
        {
          "id": 1,
          "name": "Fitness Pro Gym",
          "features": [
            "State-of-the-art equipment",
            "Personal trainers available",
            "Cardio and strength training zones",
            "Group fitness classes",
            "Sauna and steam room"
          ],
          "price": 49.99
        },
        {
          "id": 2,
          "name": "Urban Active Gym",
          "features": [
            "24/7 access",
            "Free Wi-Fi",
            "Yoga and Zumba classes",
            "Functional training zone",
            "Diet consultation"
          ],
          "price": 39.99
        },
        {
          "id": 3,
          "name": "Wellness Hub",
          "features": [
            "Swimming pool",
            "Spa and relaxation area",
            "High-intensity interval training (HIIT)",
            "Spin studio",
            "Kids’ fitness programs"
          ],
          "price": 59.99
        },
        {
          "id": 4,
          "name": "Powerhouse Gym",
          "features": [
            "Olympic weightlifting area",
            "CrossFit classes",
            "Boot camp sessions",
            "Protein shake bar",
            "Body composition analysis"
          ],
          "price": 54.99
        }
      ]
      
    return (
        <div>
            <h1 className="text-center font-extrabold my-2 text-3xl">Best Price In the Town</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    options?.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
            
        </div>
    );
};

export default PriceOptions;