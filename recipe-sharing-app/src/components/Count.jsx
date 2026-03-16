import useCounterStore from '../stores/useCounterStore'


const Count=() =>{

    const {increase, decrease, doubleCount, reset, loading, fetchData, data} = useCounterStore()

    const dataRespose = data.map((items, index)=>(
      <p key={index}>{items.title}</p>
    ))
    return (
      <>
        <div>
          <button onClick={decrease}>decrement</button>
          <button onClick={increase}>increment</button>
          <button onClick={doubleCount}>doubleCount</button>
          <button onClick={reset}>reset</button>

          <button onClick={fetchData}>Fetch Data</button>
          {loading && <p>Loading...</p>}

          {dataRespose}
        </div>
      </>
    );
}

export default Count