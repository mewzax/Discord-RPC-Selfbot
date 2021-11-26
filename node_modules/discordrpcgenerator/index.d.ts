declare class RpcError extends Error {
    name: string;
}
declare class Rpc {
    game: discordPresence | null;
    constructor(rpcObj?: discordPresence | null, readonly?: boolean);
    /**
     * Vérouille la présence, elle ne pourra plus être modifier !
     */
    lock(): void;
    /**
     * Transforme la présence pour être utilisable sur Discord.js / Selfbot.js avec le `client.user.setPresence()`
     */
    toDiscord(): {
        game: discordPresence | null;
    };
    toObject(): discordPresence;
    toString(): string;
    setName(name: string | null): this;
    setApplicationId(id: string | null): this;
    setType(type: PresenceType | number): this;
    setUrl(url: string | null): this;
    setDetails(details: string | null): this;
    setState(state: string | null): this;
    setSyncId(sync_id: string | null): this;
    setId(id: string | null): this;
    setSessionId(session_id: string | null): this;
    setParty(party: discordPresence["party"]): this;
    setFlags(flags: number | null): this;
    setCreatedAt(created_at: number | null): this;
    setAssets(assetsFunc: (AssetsObj: setAssetsObj) => void): Rpc;
    /**
     *
     * @param large_image *Attention il faut ici l'id de l'image*
     */
    setAssetsLargeImage(large_image: string | null): this;
    /**
     *
     * @param large_image *Attention il faut ici l'id de l'image*
     */
    setAssetsSmallImage(small_image: string | null): this;
    setAssetsLargeText(large_text: string | null): this;
    setAssetsSmallText(small_text: string | null): this;
    setStartTimestamp(start: number | null): this;
    setEndTimestamp(end: number | null): this;
    setPartySize(size: [number, number] | null): this;
    setPartyId(id: string | null): this;
    setJoinSecret(secret: string | null): this;
    setSpectateSecret(secret: string | null): this;
    setMatch(secret: string | null): this;
    setSecrets(secrets: discordPresence["secrets"] | null): this;
    /**
     * Twitch
     */
    setTwitchAssets(assetsFunc: (AssetsObj: setAssetsObj) => void): Rpc;
    /**
     *
     * @param large_image *Attention il faut ici l'id de l'image*
     */
    setTwitchAssetsLargeImage(large_image: string | null): this;
    /**
     *
     * @param large_image *Attention il faut ici l'id de l'image*
     */
    setTwitchAssetsSmallImage(small_image: string | null): this;
    /** Spotify */
    setSpotifyAssets(assetsFunc: (AssetsObj: setAssetsObj) => void): Rpc;
    /**
     *
     * @param large_image *Attention il faut ici l'id de l'image*
     */
    setSpotifyAssetsLargeImage(large_image: string | null): this;
    /**
     *
     * @param large_image *Attention il faut ici l'id de l'image*
     */
    setSpotifyAssetsSmallImage(small_image: string | null): this;
    private verifyNull;
    private verifyNullAssets;
    private verifyNullTimestamps;
    private verifyNullParty;
    private verifyNullSecrets;
}
declare class CustomStatus {
    game: CustomStatusGame;
    constructor(CustomStatusGame?: CustomStatusGame);
    setState(state: string): CustomStatus;
    setEmoji(emojifunc: (emojiobj: setEmojiObj) => void): CustomStatus;
    /** Ajoute un emoji custom au status */
    setDiscordEmoji(emoji: emojiLike): CustomStatus;
    /** Ajoute un emoji unicode */
    setUnicodeEmoji(emoji: string): CustomStatus;
    /** Donne un Custom Status pouvant être utilisé pour Selfbot.js */
    toDiscord(): CustomStatusGame;
    toObject(): CustomStatusGame;
    toString(): string;
}
interface setEmojiObj {
    setName(name: string): setEmojiObj;
    setId(id: string): setEmojiObj;
    setAnimated(animated: boolean): setEmojiObj;
}
interface setAssetsObj {
    setLargeImage(img: string | null): setAssetsObj;
    setSmallImage(img: string | null): setAssetsObj;
    setLargeText(text: string | null): setAssetsObj;
    setSmallText(text: string | null): setAssetsObj;
    setNull(): setAssetsObj;
}
interface CustomStatusGame {
    name: string;
    emoji: {
        name: string;
        id: string | null;
        animated: boolean;
    } | null;
    state: string;
}
interface rpcManager {
    default?: rpcManager;
    Rpc: {
        new (rpcobj?: discordPresence): Rpc;
    };
    PresenceTypes: PresenceType[];
    PresenceTypesString: PresenceTypeString[];
    PresenceTypesNumber: PresenceTypeNumber[];
    RpcError: {
        new (message: string): RpcError;
    };
    getRpcImages(application_id: string): Promise<Image[]>;
    getRpcImage(application_id: string, name: string): Promise<Image>;
    __esModule: true;
    /**
     * Ajoutez le client discord.js/selfbot.js pour le session id.
     */
    createSpotifyRpc(client: clientLike, rpcobj?: discordPresence): Rpc;
    version: string;
    CustomStatus: {
        new (CustomStatusGame?: CustomStatusGame): CustomStatus;
    };
}
interface emojiLike {
    id: string;
    animated: boolean;
    name: string;
    [k: string]: any;
}
interface clientLike {
    ws: {
        connection: {
            sessionID: string;
            [k: string]: any;
        };
        [k: string]: any;
    };
    user: {
        id: string;
        [k: string]: any;
    };
    [k: string]: any;
}
interface discordPresence {
    "name": string;
    "platform"?: string;
    "application_id"?: string;
    "type": PresenceTypeNumber;
    "url"?: string;
    "details"?: string;
    "state"?: string;
    "sync_id"?: string;
    "id"?: string;
    "session_id"?: string;
    "party"?: {
        "size"?: [number, number];
        "id": string;
    };
    "flags"?: number;
    "created_at"?: number;
    "assets"?: {
        "large_image"?: string;
        "small_image"?: string;
        "small_text"?: string;
        "large_text"?: string;
    };
    "timestamps"?: {
        "start"?: number;
        "end"?: number;
    };
    "secrets"?: {
        "join"?: string;
        "spectate"?: string;
        "match"?: string;
    };
}
/** Représente une image obtenue avec {@link getRpcImage} */
declare type Image = {
    name: string;
    id: string;
    type: number;
};
declare type PresenceTypeString = "PLAYING" | "STREAMING" | "LISTENING" | "WATCHING";
declare type PresenceTypeNumber = 0 | 1 | 2 | 3;
declare type PresenceType = PresenceTypeNumber | PresenceTypeString;
declare var rpcManager: rpcManager;
export = rpcManager;
