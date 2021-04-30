import {useRouter} from 'next/router';

function SelectClientProjectPage(){
const router = useRouter();

console.log(router.query);

    return(
        <div>
         <h1>The project page for a specific project
                for a selected client ohmylord seriously max?</h1>
        </div>
    );
}

export default SelectClientProjectPage;