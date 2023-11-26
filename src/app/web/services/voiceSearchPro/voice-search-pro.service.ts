import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//  services
import { SpeechSettingsService } from './speech-settings.service';

@Injectable({
  providedIn: 'root'
})
export class VoiceSearchProService {

  private recognitionVoice: any = null;
  private messageTranscript$= new BehaviorSubject<string>('');

  constructor (
    private speechSettingsSvc: SpeechSettingsService
  ) {}

  public getMessage$ (): Observable<string> {
    return this.messageTranscript$.asObservable()
  }

  public initRecognitionVoice (): void {
    this.recognitionVoice?.start();
    this.messageTranscript$.next('');
  }

  public stopRecognition() {
    this.recognitionVoice?.stop();
    console.log('Escucha desactivada');
  }

  public verifySpeechRecognition (): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isAvailable = 'webkitSpeechRecognition' in window;

    if (isAvailable) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.recognitionVoice = new webkitSpeechRecognition();
      this.speechSettingsSvc.applyConfigSpeech(this.recognitionVoice);
    } else {
      this.recognitionVoice = null;
    }

    return isAvailable
  }
}
