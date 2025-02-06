```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simplified conditional rendering logic
    if (count > 0) {
      console.log('Count is greater than 0');
    } else {
      console.log('Count is 0 or negative');
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```