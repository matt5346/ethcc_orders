export function contractFormat({
   address,
   tokens = [],
   name = null,
   symbol = null,
}){
    // console.log(arguments)
   return {
      address,
      name: name || address,
      symbol: symbol || '',
      tokens,
       isUpdating: false,
       type: 'undefined'    // CollectionType.(...)
   }
}

export function tokenFormat({
    id,
    contractAddress,
    name = null,
    image = null,
    description = '',
    link = null,
    originImage = null
}){
   if(image && image.startsWith('ipfs://ipfs/')) image = image.replace('ipfs://', 'https://ipfs.io/')
    const fieldsForView = []
    fieldsForView.push({key: 'name', value: name || id})
    if(description) fieldsForView.push({key: 'description', value: description})
    if(link) fieldsForView.push({key: 'link', value: link})
   return {
      id,
      contractAddress,
      identity: `${contractAddress}:${id}`,
      name: name || id,
      image,
       originImage,
      description,
      link,
       fieldsForView,
       structure: [],
       structureReady: false
   }
}