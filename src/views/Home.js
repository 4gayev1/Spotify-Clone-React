import Section from "components/Section";


const Home = () => {
  const items = [
    {
      id:1,
      title:"alma",
      description:'Original Soundtrack',
      image:"https://images.unsplash.com/photo-1609615795042-7146c22ac11e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWMlMjBhcnRpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      type:'album',
      src:'https://freesound.org/data/previews/612/612095_5674468-lq.mp3'
    },
    {
      id:2,
      title:"alma",
      description:'Original Soundtrack',
      image:"https://images.unsplash.com/photo-1503499746616-a6d202989535?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljJTIwYXJ0aXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      type:'album',
      src:'https://freesound.org/data/previews/612/612092_7037-lq.mp3'
    },
    {
      id:3,
      title:"alma",
      description:'Artist',
      image:"https://images.unsplash.com/photo-1573120525707-4549889744f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      type:'artist',
      src:'https://freesound.org/data/previews/612/612087_1648170-lq.mp3'
    },
    {
      id:4,
      title:"alma",
      description:'Original Soundtrack',
      image:"https://images.unsplash.com/photo-1505282722405-413748d3de7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljJTIwYXJ0aXN0JTIwY29uY2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      type:'album',
      src:'https://freesound.org/data/previews/612/612085_28867-lq.mp3'
    },
    {
      id:5,
      title:"alma",
      description:'Original Soundtrack',
      image:"https://images.unsplash.com/photo-1575285113814-f770cb8c796e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhcnRpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      type:'podcast',
      src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
  ]


  return (
    <div>
      <Section title="Recently Played"  more="/asdasdasd" items={items}/>

      <Section title="Your top mixes"  more="/asdasdasd" items={items}/>

      <Section title="Popular radio"  more="/asdasdasd" items={items}/>

      <Section title="Mood"  more="/asdasdasd" items={items}/>

      <Section title="Popular new releases"  more="/asdasdasd" items={items}/>
    </div>
  )
}

export default Home