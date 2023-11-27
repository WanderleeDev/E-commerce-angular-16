import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VoiceSearchProService } from '../../../web/services/voiceSearchPro/voice-search-pro.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit, AfterViewInit {
  @ViewChild('btnSpeech') btnSpeech!: ElementRef<HTMLButtonElement>;
  messageTranscript? = '';
  isActiveListening = false;
  hasVoiceRecognition = false;
  labelText = 'search by voice';

  constructor(private voiceSearchProSvc: VoiceSearchProService) {}

  ngOnInit(): void {
    const isAvailableSpeech = this.voiceSearchProSvc.verifySpeechRecognition();

    if (isAvailableSpeech) {
      this.hasVoiceRecognition = isAvailableSpeech;
    } else {
      this.hasVoiceRecognition = isAvailableSpeech;
    }
    this.voiceSearchProSvc
      .getMessage$()
      .subscribe((res) => (this.messageTranscript = res));
  }

  ngAfterViewInit(): void {
    !this.hasVoiceRecognition
      ? (this.btnSpeech.nativeElement.style.display = 'none')
      : null;
  }

  public listening(): void {
    this.isActiveListening = !this.isActiveListening;
    if (this.isActiveListening) {
      this.labelText = 'listening...';
      this.voiceSearchProSvc.initRecognitionVoice();
    } else {
      this.labelText = 'search by voice';
      this.voiceSearchProSvc.stopRecognition();
    }
  }
}
