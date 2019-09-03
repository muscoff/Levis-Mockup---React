export default class Javascript {
    banner = () => {
        let ban = document.querySelectorAll('.banner img');
        let length = ban.length;

        let banContainer = document.querySelectorAll('.banner');

        for(let i=0; i<length; i++){
            ban[i].style.display = "none";
            let attr = ban[i].getAttribute('src');
            banContainer[i].style.backgroundImage = "url("+attr+")";
            //banContainer[i].style.backgroundAttachment = "fixed";
            banContainer[i].style.backgroundPosition = "center center";
            banContainer[i].style.backgroundSize = "cover";
        }
    }

    openModal = e => {
        e.preventDefault();
        // document.querySelector('#sizeQty').setAttribute('value', 'mussy');
        //alert('cool beans');
        let bg = document.querySelector('#bg');
        bg.style.display = 'block';
        let modal = document.querySelector('#modal');
        modal.style.display = 'block';
    }

    cancel = () => {
        let bg = document.querySelector('#bg');
        bg.style.display = 'none';
        let modal = document.querySelector('#modal');
        modal.style.display = 'none';
    }

    save = () => {
        let size = document.querySelectorAll('.size');
        let length = document.querySelectorAll('.length');
        let quantity = document.querySelectorAll('.quantity');
        let holder = document.querySelector('#sizeQty');

        let sizeValue = '';

        let count = size.length;

        for(let i=0; i<count; i++){
            if(size[i].value !=='' & length[i].value !=='' & quantity[i].value !==''){
                sizeValue = sizeValue +size[i].value + ':'+length[i].value + '-'+quantity[i].value+',';
            }
        }

        holder.setAttribute('value', sizeValue);

        function closeM(){
            let bg = document.querySelector('#bg');
            bg.style.display = 'none';
            let modal = document.querySelector('#modal');
            modal.style.display = 'none';
        }
        setTimeout(closeM,500);
    }
}