import { Injectable } from '@angular/core';
import { ErrorType } from '../../interfaces/IErrorSpeech.enum';

@Injectable({
  providedIn: 'root'
})

export class SpeechSettingsService {

  public applyConfigSpeech(speech: any): void {
    this.configSpeech(speech);
  }

  private configSpeech (speech: any): void {
    //config del speech
    speech.lang = 'en-US';
    speech.continuous = true;
    speech.interimResults = false;

    //  eventos
    //  cuando inicia el speech
    speech.onstart = () => {
      console.log('Voice recognition has started.');
    }

    //  evento disparado cuando se procesa lo dictado
    speech.onresult = (event:any) => {
      const msn = event.results[event.results.length-1][0].transcript as string;
      console.log(msn);
    }

    //  evento disparado cuando termina el reconocimiento de voz
    speech.onend = () => {
      console.log('Voice recognition has finished.')
    }

    //  error disparado cuando se sucia un error
    speech.onerror = (event: any) => {
      console.log(event);
      console.log(
        this.handlerErrors(event)
      );
    }
  }

  private handlerErrors (event: { error: ErrorType }): string {
    switch (event.error) {
      case ErrorType.NoSpeech:
        return ('Sound was not received, please try again with the microphone close by.')

      case ErrorType.Network:
        return ('Network error, try again later')

      case ErrorType.AudioCapture:
        return ('Audio capture failed.')

      case ErrorType.NotAllowed:
        return ("You don't have voice recognition or microphone usage permissions, make sure you provide the necessary permissions and try again")

      default:
        return ('Internal error, try again later')
    }
  }
}
