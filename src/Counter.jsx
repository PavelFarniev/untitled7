// src/Counter.jsx
import { useState } from 'react';

function Counter() {
    // состояние с начальным значением 0
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    const reset = () => setCount(0);

    return (
        <section className="counter-card">
            <p className="counter-label">Количество кликов</p>
            <p className="counter-value">{count}</p>

            <div className="counter-buttons">
                <button type="button" className="ghost" onClick={decrement}>
                    −1
                </button>
                <button type="button" className="primary" onClick={increment}>
                    +1
                </button>
            </div>

            <button type="button" className="reset" onClick={reset}>
                Сбросить прогресс
            </button>
        </section>
    );
}

export default Counter;