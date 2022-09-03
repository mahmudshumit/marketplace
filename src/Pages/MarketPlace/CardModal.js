

const CardModal = ({collection}) => {

    const{Name}=collection;


    return (
         
<div>


<input type="checkbox" id="card-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="card-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">Buy For:{Name}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="card-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>
</div>

    );
}

export default CardModal;
