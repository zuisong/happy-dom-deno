import { URLSearchParams } from 'url';
import FormData from '../../form-data/FormData.js';
import Blob from '../../file/Blob.js';

type IResponseBody =
	| ArrayBuffer
	| ArrayBufferView
	| NodeJS.ReadableStream
	| string
	| URLSearchParams
	| Blob
	| FormData
	| null;

export default IResponseBody;
