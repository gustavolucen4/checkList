export const removeDatasRepetidas = (datas)=> {

   const datasUnicas = []
   datas.forEach((element) => {
      if(datasUnicas.indexOf(element.dataFormatada) === -1){
         datasUnicas.push(element.dataFormatada)
      }
   })

   return datasUnicas
}

export const ordenaDatas = (data)=>{

   data.sort((a, b) =>{
      const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
      const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')

      return primeiraData - segundaData
   })

}

export const ordenaHoras = (hora)=>{

   hora.sort((a, b) =>{
      const primeiraHora = moment(a, 'HH:MM').format('HHMM')
      const segundaHora = moment(b, 'HH:MM').format('HHMM')

      return primeiraHora - segundaHora
   })
}