import GuessLetterView from "./GuessLetterView";
import Overlay from "./Overlay";
import '../styles/HowToPlayScreen.css';
import Button from "./Button";
import { getRandomInt } from "../utils";
import { GuessLetterState, OverlayScreenProps } from "../models";
import { useContext } from "react";
import { GlobalSettingsContext } from "../hooks/useGlobalSettings";

function GuessExample(props: {word: string, exampleState: GuessLetterState}) {
  const randomExample = getRandomInt(0, 4);

  return <div className="d-flex">
    {
      props.word.split('').map((letter, index) => (
        <GuessLetterView
          key={letter + '-' + props.exampleState + index.toString()}
          letter={letter}
          state={index === randomExample ? props.exampleState : 'disabled'}
          marginRight={index !== 4}
        ></GuessLetterView>
      ))
    }
  </div>
}

function HowToPlayScreen(props: OverlayScreenProps) {
  const [{isColorblindModeActive: colorblind}] = useContext(GlobalSettingsContext);

  return (
    <Overlay content={
      <div className="content">
        <h1 className="text-center">COMO JOGAR</h1>

        <p className="text-center">
          Todos os dias, uma nova palavra aparecerá no Letreco para você adivinhar.<br/>
          Você terá 4 tentativas. Cada uma delas deve ser uma palavra que exista.<br/>
          Acentos e cedilha são ignorados, tanto nas tentativas, quanto na resposta.<br/>
          Após chutar, as letras mudarão para indicar o quão perto você está da resposta.
        </p>

        <hr/>

        <p className="text-center">Se uma letra ficar {colorblind ? 'redonda' : 'verde'}, ela está presente na palavra e na posição correta.</p>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <GuessExample word='AMOR' exampleState='right' />
        </div>

        <p className="text-center">Se uma letra ficar {colorblind ? 'pontilhada' : 'amarela'}, ela está presente na palavra, mas na posição errada.</p>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <GuessExample word='ODIO' exampleState='displaced' />
        </div>

        <p className="text-center">Se uma letra ficar {colorblind ? 'desta cor' : 'vermelha'}, ela NÃO está na palavra.</p>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <GuessExample word='PICA' exampleState='wrong' />
        </div>

        <p className="text-center credits">
          criado por <a href="https://twitter.com/Moutella" target="_blank" rel="noreferrer">Moutella</a><br/>
          adaptação do código original de <a href="https://gabtoschi.com" target="_blank" rel="noreferrer">Gabriel Toschi</a><br/>
          banco de palavras por <a href="https://github.com/pythonprobr/palavras" target="_blank" rel="noreferrer">pythonprobr</a><br/>
        </p>

        <div className="d-flex align-items-center justify-content-center">
          <Button
            onClick={props.handleCloseScreen}
            label='FECHAR'
          />
        </div>

      </div>
    } />
  )
}

export default HowToPlayScreen;