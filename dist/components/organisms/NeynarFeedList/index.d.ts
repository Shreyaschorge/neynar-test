import { default as React } from 'react';
type FeedType = 'following' | 'filter';
type FeedFilterType = 'fids' | 'parent_url' | 'channel_id' | 'embed_url' | 'global_trending';
export type NeynarFeedListProps = {
    feedType: FeedType;
    filterType?: FeedFilterType;
    fid?: number;
    fids?: string;
    parentUrl?: string;
    channelId?: string;
    embedUrl?: string;
    withRecasts?: boolean;
    limit?: number;
    viewerFid?: number;
    clientId?: string;
};
export declare const NeynarFeedList: React.FC<NeynarFeedListProps>;
export {};
