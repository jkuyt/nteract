/**
 * @module types
 */
import * as Immutable from "immutable";

import { ContentRef } from "../refs";

export interface ContentCommunicationRecordProps {
  loading: boolean;
  saving: boolean;
  error?: object | null;
}

export const makeContentCommunicationRecord = Immutable.Record<
  ContentCommunicationRecordProps
>({
  loading: false,
  saving: false,
  error: null
});

export interface ContentsCommunicationRecordProps {
  byRef: Immutable.Map<
    ContentRef,
    Immutable.RecordOf<ContentCommunicationRecordProps>
  >;
}

export const makeContentsCommunicationRecord = Immutable.Record<
  ContentsCommunicationRecordProps
>({
  byRef: Immutable.Map()
});
