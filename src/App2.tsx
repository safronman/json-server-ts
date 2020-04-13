import React, {useEffect} from 'react';
import './App.css';
import {getInitialValue, increaseValue} from "./redux/counter-reducer";
import {connect} from "react-redux";
import {IState} from "./redux/store";

interface IMapProps {
    value: number
}

interface IDispatchProps {
    getInitialValue: () => void
    increase: () => void
}

//type IProps = IMapProps & IDispatchProps;
interface IProps extends IMapProps, IDispatchProps {
}

function App2(props: IProps) {
    useEffect(() => {
        props.getInitialValue()

        /*case INCREASE_VALUE_SUCCESS:
                return {...state, value: action.value};*/
    }, []);


    return (
        <div className="App"><span>{props.value}</span>
            <button onClick={props.increase}>+</button>
            <span>{props.value}</span>

            {/*<button onClick={props.increase}>+</button>
            <button onClick={props.increase}>+</button>
            <button onClick={props.increase}>+</button>
            <button onClick={props.increase}>+</button>
            <button onClick={props.increase}>+</button>
            <button onClick={props.increase}>+</button>
            <button onClick={props.increase}>+</button>
            <button onClick={props.increase}>+</button>
            <button onClick={props.increase}>+</button>
            <button onClick={props.increase}>+</button>
            <button onClick={props.increase}>+</button>
            <button onClick={props.increase}>+</button>*/}
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem esse incidunt mollitia
                omnis. Accusamus aliquid asperiores aspernatur commodi cumque cupiditate distinctio ex in ipsum
                libero molestiae non omnis quisquam, reiciendis repellat repellendus reprehenderit sapiente sed
                totam voluptate. Dolor dolores ea fugiat iste iusto, obcaecati praesentium veniam. Amet aperiam
                blanditiis commodi consectetur, cumque dicta dolor earum enim eos et eveniet facere fugiat in
                incidunt inventore magni necessitatibus non nostrum nulla obcaecati odio perferendis quasi qui quo
                recusandae repudiandae temporibus. A adipisci amet corporis eaque eius esse in ipsa laudantium, modi
                nemo numquam odio pariatur perferendis quas quasi ratione, repellat repellendus reprehenderit
                repudiandae sint ut vitae voluptatem! Corporis facere laboriosam mollitia nesciunt omnis quia
                repellat voluptatibus? Debitis dicta dolor doloremque eaque eveniet, explicabo facere fugiat hic
                iusto libero modi molestias natus necessitatibus neque optio possimus tempore voluptate. Blanditiis
                consectetur dolores, earum fugiat impedit iure, iusto maiores non quam, quos recusandae rem ullam
                ut? Amet consequuntur cum doloremque dolorum expedita fugit, incidunt ipsum, minima minus nam
                necessitatibus perferendis, repellendus tenetur ullam velit. Asperiores corporis cupiditate dolor
                dolore dolorem doloremque ea eius et eveniet exercitationem fuga fugit id in, laudantium libero
                minima modi neque nobis nostrum nulla officiis optio perferendis porro quam qui quod quos ratione
                repellat repellendus saepe suscipit veritatis voluptas voluptate? Accusamus ad adipisci asperiores
                assumenda, atque commodi consequatur cumque distinctio dolore dolorum earum esse ex facilis harum
                hic ipsa ipsum itaque laboriosam libero maiores nesciunt obcaecati, officiis quam quasi
                reprehenderit sapiente similique soluta sunt tempora totam velit voluptas voluptates voluptatibus!
                Accusamus animi consectetur cupiditate distinctio excepturi fugiat fugit id iusto labore molestiae
                nam, qui quia quidem, rem rerum! Accusantium alias dolor est libero omnis quibusdam quod quos
                repudiandae vel vero! Aspernatur assumenda consequatur dolor ea explicabo inventore itaque neque,
                sed sequi. Atque aut deserunt dicta doloremque eius facere facilis illum iste iure molestiae
                necessitatibus nesciunt nisi, officiis quas quasi quis quo reiciendis suscipit vel veniam. Corporis
                dolorem eius fugiat illum minima nisi nobis obcaecati, omnis pariatur quaerat quis ratione tempore
                totam unde voluptatibus. Enim facilis laudantium nemo odit quos, sapiente sint? Autem corporis,
                doloremque eligendi, enim eveniet excepturi in inventore iste libero, nobis odio optio perferendis
                temporibus. Error inventore laborum quia soluta voluptate. Accusantium ad aut, dolor harum itaque
                magnam sequi? Aliquam asperiores aspernatur autem cupiditate dolorem eveniet explicabo facilis,
                illum iure libero magni nisi optio possimus, recusandae rerum saepe tenetur vero. At commodi
                consequuntur cum esse fugit id inventore minus mollitia, neque officia, officiis pariatur quaerat
                quod sit vel veritatis, voluptatibus. Animi, dolore excepturi fugit id in ipsa ipsum magnam
                necessitatibus non obcaecati optio, pariatur quaerat quibusdam ratione tempora? Accusamus assumenda
                aut beatae consequatur debitis deserunt dolorem eveniet fugiat hic maxime necessitatibus neque nobis
                officia omnis pariatur possimus quasi quo similique tempora tenetur, ullam voluptatem voluptatum?
                Aliquam asperiores autem consequuntur deserunt dolorum, enim fugiat incidunt ipsum libero magnam
                molestiae odio odit, perspiciatis quae repellat, saepe sequi! A accusamus alias at dolore expedita
                magni maiores, minima nisi nostrum nulla numquam odit optio quaerat quas quia quidem, recusandae,
                repudiandae rerum saepe similique tenetur velit voluptatibus. Animi beatae corporis cumque dicta
                distinctio eos esse eveniet facilis ipsum maiores minima nihil placeat praesentium quas quia quidem
                ratione rerum, sapiente, sint voluptatibus! Aliquam animi aut dolore ex illum laboriosam maiores
                nam, necessitatibus nemo non numquam pariatur perspiciatis quas, quia soluta tempora temporibus!
                Eaque, quae, sed. Accusantium cum dignissimos nesciunt soluta voluptas. Ad alias aliquam, deleniti
                distinctio ex inventore ipsa itaque minima modi quasi, sapiente, sit temporibus voluptatem.
                Accusantium asperiores at corporis culpa, enim esse harum hic, illo magni modi molestiae obcaecati
                optio quasi quia reiciendis sapiente tenetur. Ad aspernatur assumenda, cum, dolore, dolorum ipsam
                minus molestiae molestias nihil non rem rerum voluptates voluptatum! Dolores, eius explicabo harum
                laboriosam natus nobis nostrum odit officia perferendis qui, quisquam repellendus unde voluptas.
                Corporis dicta doloribus eaque enim iure obcaecati quod recusandae, sint suscipit. Aliquid
                aspernatur cupiditate delectus doloremque dolorum et excepturi ipsum, odio officia optio pariatur
                quaerat reiciendis repellendus reprehenderit sed tempora totam voluptatem! Ad alias assumenda autem
                commodi ea excepturi impedit inventore, ipsum maiores necessitatibus non quasi qui, quidem quod
                ratione, reprehenderit vel! Animi architecto ducimus error exercitationem explicabo magnam, natus
                praesentium. Alias delectus dolor eos expedita iusto laborum minus mollitia nam odit possimus
                praesentium quasi quis, reprehenderit saepe suscipit velit voluptatem? Autem dicta, dolorem eaque ex
                inventore iste molestias necessitatibus nobis nulla officia officiis perferendis placeat quam quas
                quo ratione reprehenderit similique ullam vitae voluptates! Beatae excepturi explicabo iste
                laudantium magni quod soluta veniam. Alias, animi aperiam consequatur dolore excepturi fugit, iure
                maxime molestias non nostrum optio pariatur provident sunt suscipit temporibus, ullam voluptates! A
                accusantium architecto at blanditiis culpa cum cupiditate delectus distinctio doloribus ex
                exercitationem facere fuga illo magni optio perferendis perspiciatis porro quibusdam quisquam
                ratione repudiandae soluta temporibus, tenetur totam ut, voluptatem voluptatum! Adipisci asperiores
                aspernatur debitis delectus dignissimos dolore dolorem dolorum eligendi eveniet, facere fugiat illum
                molestias nam nemo nobis officia porro quasi quod quos veritatis. Architecto distinctio eligendi
                excepturi optio tempora tenetur. Accusantium doloribus incidunt minima nobis quia. Ab amet aut
                consequatur cumque delectus distinctio dolorum eius est illum inventore ipsum, iste laboriosam
                laudantium magni nihil nobis odio perspiciatis placeat porro possimus praesentium quam quas quasi
                qui quis quo ratione reiciendis rem rerum saepe soluta suscipit tempora tempore, ut velit veniam
                veritatis? Ab accusamus accusantium aut, blanditiis consequatur corporis cum dignissimos dolores
                doloribus ducimus ea eaque est et facilis illo inventore magni maxime minima molestias nam neque,
                nisi nobis non numquam pariatur possimus praesentium quae quaerat quo quod rem reprehenderit tenetur
                vitae! Alias aperiam, dolores eaque eos incidunt necessitatibus ut? Accusamus aliquid beatae
                explicabo laborum officia quia quod recusandae. Ad doloremque esse eveniet ex expedita fuga fugiat
                id molestiae mollitia sit. Aut beatae doloremque fugiat id inventore molestias nulla tempore vitae?
                Atque debitis enim expedita necessitatibus praesentium quaerat vitae voluptatem. Aliquid dolorem
                eaque eos excepturi nobis perferendis, porro provident quisquam sunt velit! At consectetur debitis
                deserunt, eum explicabo fuga impedit ipsam itaque labore libero natus nobis omnis perferendis
                provident qui quisquam recusandae sed sequi totam ullam. Assumenda deleniti quis tempora?</h1>
        </div>
    );
}

const mstp = (state: IState): IMapProps => ({
    value: state.counter.value
})

export default connect(mstp, {increase: increaseValue, getInitialValue})(App2);
