import { Bar , Doughnut , Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale, 
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale, 
  LinearScale,
  Title,
  Tooltip,
  Legend
);


import { MostrarContext } from '../contexts/mostrar.producto';
import { useContext, } from 'react';



export default function LinesChart() {
// const [nombreCate , setNombreCate]= useState([])
const {categorias} = useContext(MostrarContext)

// useEffect(() => {
//     console.log(categorias)
//     setNombreCate(categorias)

//   }
// }, [categorias])


    return( 
        // <div>
            <Bar data={
                {
                    labels: [ 'categorias 1', 'categoria 2 ', 'categoria 3 ' , 'categoria 4 ', 'categoria 5 '],
                    datasets:[{
                        label:'Revenue',
                        data: [2, 3, 4, 8 , 10 , 15 ,4, 7],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                             'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)', 
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                        ]
                    },
                ]
                    
                }

            } />
        // </div>
   
)
}