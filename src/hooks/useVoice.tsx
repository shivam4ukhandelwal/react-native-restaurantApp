import Voice, {
  SpeechErrorEvent,
  SpeechResultsEvent,
  SpeechEndEvent,
  SpeechRecognizedEvent,
  SpeechVolumeChangeEvent,
} from '@react-native-voice/voice';
import {useEffect, useState} from 'react';
import {Platform} from 'react-native';

export type listeningStatusType =
  | 'started'
  | 'listening'
  | 'notListening'
  | 'success'
  | 'failed';

export interface useVoiceSearchProps {
  isRecording?: boolean;
  recognizedText?: string;
  startRecording: () => void;
  stopRecording: () => void;
  setSearch: (text: string) => void;
  listeningStatus: listeningStatusType;
  setListenStatus: (status: listeningStatusType) => void;
}

export const useVoiceSearch = (): useVoiceSearchProps => {
  const [recognizedText, setSearch] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [listeningStatus, setListenStatus] =
    useState<listeningStatusType>('listening');
  let partialText = '';

  const onSpeechStart = () => {
    setListenStatus('listening');
    setIsRecording(true);
  };

  const onSpeechEnd = (err: SpeechEndEvent) => {
    console.log('Not Listening', err);
    setListenStatus('success');
  };

  const onSpeechError = (_err: SpeechErrorEvent) => {
    stopRecording();
    setListenStatus('failed');
  };

  const onSpeechResults = (result: SpeechResultsEvent) => {
    setSearch(result?.value?.[0] || '');
    stopRecording();
  };
  const onSpeechRecognized = (res: SpeechRecognizedEvent) => {
    if (
      Platform.OS === 'ios' &&
      !res.isFinal &&
      !recognizedText &&
      partialText
    ) {
      setSearch(partialText);
      partialText = '';
      setListenStatus('success');
      stopRecording();
    }
  };
  const onSpeechVolumeChanged = (e: SpeechVolumeChangeEvent) => {
    console.log('onSpeechVolumeChanged', e);
  };
  const onSpeechPartialResults = (res: SpeechResultsEvent) => {
    if (Platform.OS === 'ios' && res.value?.[0]) {
      partialText = res?.value?.[0];
    }
    console.log('onSpeechPartialResults', res);
  };

  useEffect(() => {
    // Register event listeners
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    return () => {
      // Remove event listeners when component unmounts
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  const startRecording = async () => {
    try {
      await Voice.start('en-IN');
    } catch (error) {
      stopRecording();
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
      await Voice.destroy();
    } catch (error) {
      await Voice.stop();
    }
  };

  return {
    isRecording,
    recognizedText,
    startRecording,
    stopRecording,
    setSearch,
    listeningStatus,
    setListenStatus,
  };
};
