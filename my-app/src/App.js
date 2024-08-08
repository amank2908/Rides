import React,{useState} from 'react'
import DataTable from 'react-data-table-component';
function App(){
    const columns=[
        {
            name:"id",
            selector:row=>row.id,
            sortable:true

        },
        {
           name:'User Name', 
           selector:row =>row.name,
           sortable:true

        },

        {
            name:"User Phone",
            selector:row=>row.Phone,
            sortable:true

        },
        {
            name:"Vechile Number",
            selector:row =>row.Vechile,
            sortable:true

        },
        {
            name:"PickUp Location",
            selector:row=>row.PickUp,
            sortable:true
        },
        {
            name:"Destination location",
            selector:row=>row.Destination,
            sortable:true
        },
        {
            name:"Scheduled Time",
            selector:row=>row.Scheduled,
            sortable:true
        },
        {
            name:"Estimated End Time ",
            selector:row=>row.Estimated,
            sortable:true
        },
        {
            name:"Passenger Count",
            selector:row=>row.Passenger,
            sortable:true
        },
        {
            name:"Status",
            selector:row=>row.Status,
            sortable:true
        },
        {
            name:"Created At",
            selector:row=>row.Created,
            sortable:true
        },
        {
            name:"Active",
            selector:row=>row.selector,
            sortable:true
        }
     ];
     const data=[
        {
            id:181,
           name:'Tushar',
           Phone:981076202,
           Vechile :'Sbahanbaj',
            PickUp:'Merrut,Uttar Pradesh,India',
            Destination:'Noida,UttarPradesh,India',
            Scheduled:'May 30 ,03:25PM',
            Estimated:'May 30 ,04:56PM',
            Passenger:'0',
            Status:'Cancelled',
            Created:'May29,03:27PM'

        },
        {
            id:182,
            name:'Tushar',
            Phone:9810762102,
            Vechile :'Sbahanbaj',
             PickUp:'Merrut,Uttar Pradesh,India',
             Destination:'Noida,UttarPradesh,India',
             Scheduled:'May 30,03:25PM',
             Estimated:'May 30,04:56PM',
             Passenger:'0',
             Status:'Cancelled',
             Created:'May29,03:27PM'



        },
        {
            id:183,
            name:'Tushar',
            Phone:981076202,
            Vechile :'Sbahanbaj',
             PickUp:'Merrut,Uttar Pradesh,India',
             Destination:'Noida,UttarPradesh,India',
             Scheduled:'May 30,03:25PM',
             Estimated:'May 30,04:56PM',
             Passenger:'0',
             Status:'Cancelled',
             Created:'May29,03:27PM'


        },
        {
            id:180,
            name:'Harry',
            Phone:1234567890,
            Vechile :'UP15DV6530',
             PickUp:'Merrut,Uttar Pradesh,India',
             Destination:'Sector 128,Noida,UttarPradesh,India',
             Scheduled:'May 28,08:00PM',
             Estimated:'May 28,09:58PM',
             Passenger:'0',
             Status:'Completed',
             Created:'May28,07:20PM'


        },
           {
            id:179,
            name:'Harry',
            Phone:1234567890,
            Vechile :'Sbahanbaj',
             PickUp:'Merrut,Uttar Pradesh,India',
             Destination:'IMS ENGINEERING COLLEGE,Uttar Pradesh,India',
             Scheduled:'May 28,9:00PM',
             Estimated:'May 28,10:18PM',
             Passenger:'0',
             Status:'Cancelled',
             Created:'May28,7:08PM',



           }
     ]
      const [records,setRecords]=useState(data);
      function handleFilter(event){
        const newData=records.filter(row=>{
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }

      return (

        <div className='container mt-5'>
            <div className='text-end'><input type="text" onChange={handleFilter}/></div>
            <DataTable 
            columns={columns}
            data={data}
            fixedHeader
            pagination

           ></DataTable>

 
        </div>
    )
}
export default App;