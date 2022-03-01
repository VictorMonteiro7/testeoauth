import * as S from './HomeStyle'
import {useSignInGithub} from '../../hooks/useSignInGithub'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import { useStates } from '../../hooks/useStates';

export const Home = ()=>{
  const {signInWithGithub} = useSignInGithub();
  const {state, dispatch} = useStates();
  const navigate = useNavigate();

  const handleLogin = async ()=>{
    const res = await signInWithGithub();
    if(res){
      dispatch({type: 'SET_USER', payload: {
        id: res.uid,
        email: res.email,
        photo: res.photoURL,
        name: res.displayName
      }})
      navigate('/sobre')
    } else {
      throw new Error('Não foi possível fazer o login');
    }
  }

  useEffect(()=>{
    const unsub = auth.onAuthStateChanged(user=>{
      if(user){
        dispatch({type: 'SET_USER', payload: {
          id: user.uid,
          email: user.email,
          photo: user.photoURL,
          name: user.displayName
        }})
        navigate('/sobre')
      }
    })
    return (unsub())
  },[])

  return (
    <S.Container>
      <div className="left">
        <h1>Teste left</h1>
      </div>
      <div className="right">
       {!state.userInfo.id && 
        <button onClick={handleLogin}>Conectar ao Github</button>
       }
      </div>
    </S.Container>
  )
}