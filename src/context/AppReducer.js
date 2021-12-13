export default (state, action) => {
  switch (action.type) {
    case "DELETE_TANKKAUKSET":
      return {
        ...state,
        tankkaukset: state.tankkaukset.filter(
          (tankkaukset) => tankkaukset.id !== action.payload
        )
      }
 case 'ADD_TANKKAUKSET':
     return {
         ...state,
         tankkaukset: [action.payload, ...state.tankkaukset]
     }
      default:
      return state;
  }
}
