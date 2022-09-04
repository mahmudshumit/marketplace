

const CardModal = ({collection}) => {

    const{Name,img}=collection;


    return (
         
<div>


<input type="checkbox" id="card-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="card-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">{Name}</h3>
    <figure class="w-24"><img src={img} alt="car!"/></figure>
    <div class="modal-action">
      <label for="card-modal" class="btn">Submit</label>
    </div>
  </div>
</div>
</div>

    );
}

export default CardModal;
